<script>
  const GRAPH_COLORS = [
    '#f472b6', // pink
    '#38bdf8', // sky blue
    '#a78bfa', // violet
    '#fb923c', // orange
    '#4ade80', // green
    '#facc15', // yellow
    '#22d3ee', // cyan
    '#f87171', // red
    '#c084fc', // purple
    '#34d399', // emerald
  ];

  const RAW = `*   07ff919 Merge pull request #169 from beabout/main
|\\  
| * 60dca64 schedule: add toggle and overflow hide
* | 0cd13e0 Merge pull request #167 from beabout/main
|\\| 
| *   a3312d7 Merge pull request #166 from beabout/features/add-schedule-and-calendar
| |\\  
| | * 73aea5f schedule: modify calendar work order item
| | * 074e3d4 schedule: initial schedule
| |/  
* | 442fc2e Merge pull request #164 from beabout/main
|\\| 
| * 4d868f5 docks: add map to index
| *   764ed0e Merge pull request #163 from beabout/feature/add_existing_lift_id_to_slips
| |\\  
| | * 5c0b7ff clients: fix _jumbo reference
| | * 877bd28 slip: fix current_lift returns
| | * 02d0109 slips: add form to index
| | * 72cc532 slips: add existing_lift_id
| |/  
| * b211967 views: remove clear btn when no params
| * 62f4dd4 clients: remove _jumbo
| * c14a8b8 app: move logo to sidebar
| * 4973b7f ramps: update index with map
* | 08ab7e9 config: lint puma.rb
* | faebc1b config: disable ssl binding, rely on pangolin reverse proxy for ssl
|/  
* 4f4ae6e slip: add detail to title
* 28dd03f clients: update connect dock turbo process
*   c4b9cf9 Merge pull request #160 from beabout/feature/add_labels_to_solutions
|\\  
| * 9ece343 spec: work_orders_spec fixes
| * ef76c7c solutions: remove has_ fields
|/  
*   408c01b Merge pull request #159 from beabout/features/remove_waiting_for_fields
|\\  
| * 4f790b1 app: remove waiting_for_ fields
|/  
*   9bae5f1 Merge pull request #158 from beabout/features/add_images_to_model_shows
|\\  
| * fa4e691 views: clean up images on shows
| * 7f832b4 spec: some updates
| * f6225a6 WIP: add images to model shows
|/  
*   cac957f Merge pull request #157 from beabout/bug/resolve_dupe_slips
|\\  
| * a4bc294 slip_select_switch: add warning label
| * 20a972c slip: adding updating constraints
| * a066c0d scss: update clients, slips, tickets cards and jumbos
| * d6fbf63 scss: update boats and docks cards
| * 664568b solution: codex: add reuse_existing_slip
|/  
* b5d93a3 labels: add to status changes and colorize search
* 8fc1769 work_order_generator: add labels
* e7290fa boats: add underwater_inches, back_branchet_inches
* 1f93ba1 dashboard: add labels section
* 6ac3d9d work_orders_controller: fix :id distinction bug
* 94e538d work_order_status_change: add all work_order fields
* 6fb474d work_orders: index: search by labels
* 0f6cb13 work_order: form: fix select field disable issue
* 1126e90 work_orders: add labels to form and show
* 0207c46 controller: add labels_controller and views
* 700fc64 scss: allow Choices dropdowns to escape their containers
* 61d69fc models: add labels
* 4c331e6 sidebar: add sidebar pinning
* c1c8d04 dashboard: Claudified
* 57b0fb0 work_order_generator: add images
* e924f71 docks: fix typo
* 8df3691 config: docker: add chicago tz
*   9a2027b Merge pull request #149 from beabout/feature/clients-search-notes
|\\  
| * 7c4eb24 clients: search by notes on index
|/  
*   ce5e4de Merge pull request #148 from beabout/feature/track-status-history
|\\  
| * d40870d spec: work_order_spec: update queued jobs tests
| * e58b3e9 work_orders: add status_changes_modal.html.haml
| * 5f5e09d db: add work_order_status_changes table
|/  
*   fdacb24 Merge pull request #147 from beabout/update-turbo-forms
|\\  
| * 2536d65 spec: update #edit cases for turbo
| * 83325a8 views: remove show and back links on edit views
| * fe017fd app: remove unused format.turbo_streams and turbo_frame_tags
| * 71594e8 boats: fix turbo edit/update partials
| * 747c921 controllers: remove all format.json
| * 89b92f0 clients: fix turbo edit/update partials
| * 6fb1507 WIP: update client form with turbo
| * a6300c0 app: fix flash notifications
* |   f58eed1 Merge pull request #146 from beabout/feature/work-order-status-billed
||\\ \\  
|| |/  
||/|   
|| * 97410e4 models: work_order: add billed status
||/  
* e9454db importmap: load controllers from importmap
*   2c90c35 Merge pull request #144 from beabout/136-searchable-select-fields
|\\  
| * 32e01b3 js: move Choices logic to separate module
| * 2c10607 config: enable pangolin as reverse proxy
| * 8881e61 application.js: globally init select fields as Choices
| * 12adeff slips: form: initialize select fields as Choices
| * 7ebc392 css: override choices css  to match bootstrap styling
| * d3b46bf views: slips: _form: add POC choices.js use case
| * 29da166 assets: load choices.min.css globally
| * cd1de94 javascript: add vanilla choices.js
|/  
* 691e287 slips: _table: fix delete_slip params
*   736208a Merge pull request #142 from beabout/work-order-form-fixes-again
|\\  
| * e5fea2b rubocop: set config in workflow and remove rubocop_todo.yml
| * f79c0a9 spec: views: work_orders_spec: add client form fields specs
| * 46221b2 work_orders: form: solution: use partial method for slip_fields
| * 82a12ce work_orders: form: client: clean up javascript
| * 2a8decb client: form: remove disabled param from locals
| * bd07b5b work_orders: form: client: pattern form elements to same as boat and slip
| * 4e0d2e4 work_order_form: dynamic slip and boat form updates
| * da63dbb rubocop: linting and ignore db files
| * 9bf66a4 spec: add views/work_orders_spec.rb
| * 6aca475 test: spec: add capybara and warden support
| * ab2c149 test: docker: add multi-stage build step
| * 138f60b boats: add bunk_measure_in_inches to forms, odd it was not there
| * 953eea4 work_orders_controllers: remove todo on add_client_to_boats
| * a271f2a work_orders_controller: add logger statements on add_client_to* functions
| * 4692723 db: migrate: parent_id is optional
|/  
* 15afbb4 add .dockerignore and .ruby-version`;

  function parseLine(raw) {
    const hashPattern = /^([^a-f0-9]*)([a-f0-9]{7})\s(.*)$/;
    const match = raw.match(hashPattern);

    if (!match) {
      return { graph: raw, hash: '', message: '' };
    }

    return {
      graph: match[1],
      hash: match[2],
      message: match[3],
    };
  }

  function colorizeGraph(graphStr) {
    const segments = [];
    const pipePositions = new Map();

    for (let i = 0; i < graphStr.length; i++) {
      const ch = graphStr[i];
      const pos = Math.floor(i / 2);

      if ('|/\\'.includes(ch)) {
        if (!pipePositions.has(pos)) {
          pipePositions.set(pos, GRAPH_COLORS[pos % GRAPH_COLORS.length]);
        }
        segments.push({ char: ch, color: pipePositions.get(pos) });
      } else if (ch === '*') {
        segments.push({ char: ch, color: '#facc15' });
      } else {
        segments.push({ char: ch, color: null });
      }
    }

    return segments;
  }

  function isMerge(msg) {
    return msg.startsWith('Merge ');
  }

  const lines = RAW.split('\n');
</script>

<div class="terminal-window">
  <div class="terminal-titlebar">
    <div class="terminal-dots">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
    </div>
    <span class="terminal-title">git log --graph --oneline</span>
    <div class="terminal-titlebar-spacer"></div>
  </div>
  <div class="terminal-body">
    <pre class="terminal-pre">{#each lines as line}<span class="terminal-line">{#each colorizeGraph(parseLine(line).graph) as seg}<span style={seg.color ? `color:${seg.color}` : ''}>{seg.char}</span>{/each}{#if parseLine(line).hash}<span class="git-hash">{parseLine(line).hash}</span>{' '}<span class={isMerge(parseLine(line).message) ? 'git-merge' : 'git-msg'}>{parseLine(line).message}</span>{/if}</span>
{/each}</pre>
  </div>
</div>

<style>
  .terminal-window {
    border: 1px solid rgba(163, 247, 181, 0.2);
    border-radius: 12px;
    box-shadow:
      0 0 40px rgba(163, 247, 181, 0.08),
      0 0 80px rgba(56, 189, 248, 0.04),
      0 25px 50px rgba(0, 0, 0, 0.5);
    margin: 1rem auto 2rem;
    max-width: 1000px;
    overflow: hidden;
    background: linear-gradient(170deg, #0d1117 0%, #0a0e14 50%, #101820 100%);
  }

  .terminal-titlebar {
    align-items: center;
    background: linear-gradient(90deg, #1a1e2e, #161b28);
    border-bottom: 1px solid rgba(163, 247, 181, 0.1);
    display: flex;
    padding: 12px 16px;
  }

  .terminal-dots {
    display: flex;
    gap: 8px;
  }

  .dot {
    border-radius: 50%;
    display: inline-block;
    height: 13px;
    width: 13px;
  }

  .dot-red { background: #ff5f57; box-shadow: 0 0 6px #ff5f5788; }
  .dot-yellow { background: #febc2e; box-shadow: 0 0 6px #febc2e88; }
  .dot-green { background: #28c840; box-shadow: 0 0 6px #28c84088; }

  .terminal-title {
    color: #8b949e;
    flex: 1;
    font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
    font-size: 13px;
    text-align: center;
  }

  .terminal-titlebar-spacer {
    width: 60px;
  }

  .terminal-body {
    max-height: 80vh;
    overflow: auto;
    padding: 16px 20px;
    scrollbar-color: rgba(163, 247, 181, 0.2) transparent;
  }

  .terminal-body::-webkit-scrollbar {
    width: 8px;
  }

  .terminal-body::-webkit-scrollbar-track {
    background: transparent;
  }

  .terminal-body::-webkit-scrollbar-thumb {
    background: rgba(163, 247, 181, 0.15);
    border-radius: 4px;
  }

  .terminal-body::-webkit-scrollbar-thumb:hover {
    background: rgba(163, 247, 181, 0.3);
  }

  .terminal-pre {
    font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
    white-space: pre;
    color: #c9d1d9;
  }

  .terminal-line {
    display: inline;
  }

  :global(.git-hash) {
    color: #facc15;
    font-weight: 700;
  }

  :global(.git-merge) {
    color: #c084fc;
    font-style: italic;
  }

  :global(.git-msg) {
    color: #e2e8f0;
  }
</style>
