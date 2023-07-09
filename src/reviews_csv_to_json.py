#!/usr/bin/python3

import csv
import re

filename = 'reviews.csv'
outfile  = 'reviews.json'

def generate_json():
  of = open(outfile, 'w')
  with open(filename, 'r') as infile:
    reader = csv.DictReader(infile)
    of.write("{ \"reviews\": [\n")
    first = True
    for row in reader:
      if first:
        first = False
      else:
        of.write(",\n")
      write_line(of, row)
    of.write("\n] }")
      
def write_line(outfile, row):
  review = re.sub(
    "\xa0", "", 
    re.sub(
      "\n", "<br/>", 
      re.sub(
        "\"", "\\\"", 
        row['Review']
      )
    )
  )
  
  outfile.write("{")
  outfile.write("\n\t\"Date\": \"%s\", "   % row['Date'])
  outfile.write("\n\t\"Name\": \"%s\", "   % row['Name'])
  outfile.write("\n\t\"Year\": \"%s\", "   % row['Year'])
  outfile.write("\n\t\"Rating\": \"%s\", " % row['Rating'])
  outfile.write("\n\t\"Review\": \"%s\"" % review)
  outfile.write("\n}")

generate_json()
