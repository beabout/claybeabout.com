#!/usr/bin/python3

import csv
import re
import subprocess

REVIEWS_FILE = 'files/reviews.csv'
RATINGS_FILE = 'files/ratings.csv'
OUTFILE = 'reviews.json'

reviews = []

class Review():
  def __init__(self, date, watched_date, name, year, rating, review, poster_url):
    self.date = date
    self.watched_date = watched_date
    self.name = name
    self.year  = year
    self.rating = rating
    self.review = review
    self.poster_url = poster_url

  def to_json_str(self):
    return "{\n" \
    f"\t\"Date\": \"{self.date}\", \n" \
    f"\t\"Watched Date\": \"{self.watched_date}\", \n" \
    f"\t\"Name\": \"{self.name}\", \n" \
    f"\t\"Year\": \"{self.year}\", \n" \
    f"\t\"Rating\": \"{self.rating}\", \n" \
    f"\t\"Review\": \"{self.review}\", \n" \
    f"\t\"PosterURL\": \"{self.poster_url}\" \n" \
    "}" \

  def to_json(self):
    return {
      'Watched Date': self.watched_date,
      'Date': self.date,
      'Name': self.name,
      'Year': self.year,
      'Rating': self.rating,
      'Review': self.review,
      'PosterURL': self.poster_url
    }


def grab_url_and_review(row, no_url=False):
  review = ""
  poster_url = False
  if 'Review' in row.keys():
    review = re.sub("\xa0", "", re.sub("\n", "<br/>", re.sub("\"", "\\\"", row['Review'])))
  # if not no_url:
  #   subprocess.run(
  #     "wget %s" % row['Letterboxd URI'], 
  #     shell=True
  #   )
  #   poster_file = re.sub(
  #     "https://boxd.it/", 
  #     "", 
  #     row['Letterboxd URI']
  #   )
  #   # grab the poster_url from the downloaded review_url
  #   poster_url = subprocess.run(
  #     "grep -Eo \"itemReviewed.*jpg\" %s | sed 's/itemReviewed\":{\"image\":\"//' " % poster_file, shell=True, 
  #     stdout=subprocess.PIPE
  #   )
  #   poster_url = poster_url.stdout.decode('ascii')
  #   poster_url = re.sub('\n', '', poster_url)
    poster_url = False
  return poster_url, review


# @brief Checks if rating has an existing review
# @param row - csv data row from letterboxd's standardized ratings.csv file
# @return Returns True if if one is found, otherwise False
def rating_has_a_review(row):
  for review in reviews:
    if (review.name == row['Name']):
      if ((review.date or review.watched_date) == row['Date']):
        print(f"({review.watched_date}|{review.date}) == {row['Date']}: {review.name}")
      return True
  return False

def get_reviews():
  with open(REVIEWS_FILE, 'r') as infile:
    reader = csv.DictReader(infile)
    for row in reader:
      review = Review(
        row['Date'], row['Watched Date'], row['Name'], row['Year'],
        row['Rating'], row['Review'], None
      )
      reviews.append(review)


def get_ratings():
  with open(RATINGS_FILE, 'r') as infile:
    reader = csv.DictReader(infile)
    for row in reader:
      # Letterboxd splits their reviews into two camps: reviews and ratings.
      # A rating merely has an integer value (0-5) whereas a review has an integer value
      # along with a text review
      has_review = rating_has_a_review(row)
      if not has_review:
        rating = Review(
          row['Date'], row['Date'], row['Name'], row['Year'], row['Rating'], None, None
        )
        # print(f"This rating did not have a review: {rating.name}")
        reviews.append(rating)


def merge_reviews():
  s_arr = sorted(arr, key=lambda d: d['Name'])
  return s_arr

def write_out(sorted_arr):
    of = open(outfile, 'w')
    of.write("{ \"reviews\": [\n")
    first = True
    for row in sorted_arr:
      if first:
        first = False
      else:
        of.write(",\n")
      write_line(of, row)
    of.write("\n] }")
      
def write_line(outfile, row):
  outfile.write("{")
  outfile.write("\n\t\"Date\": \"%s\", "   % row['Date'])
  outfile.write("\n\t\"Watched Date\": \"%s\", "   % row['Watched Date'])
  outfile.write("\n\t\"Name\": \"%s\", "   % row['Name'])
  outfile.write("\n\t\"Year\": \"%s\", "   % row['Year'])
  outfile.write("\n\t\"Rating\": \"%s\", " % row['Rating'])
  outfile.write("\n\t\"Review\": \"%s\", " % row['Review'])
  outfile.write("\n\t\"PosterURL\": \"%s\"" % row['PosterURL'])
  outfile.write("\n}")

def generate_json():
  get_reviews()
  get_ratings()
  # for review in reviews:
  #   print(review.name)
  # merge_reviews(
    #ratings=ratings,
    #reviews=reviews
  #)
  # read_reviews()
  # merge_reviews()
  # write_out(arr)

if __name__ == "__main__":
  generate_json()
  subprocess.run("rm -f 2* 3* 4* 5* 6* 7 8;", shell=True)
