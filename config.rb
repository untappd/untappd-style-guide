###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :source, 'ut'

set :markdown_engine, :kramdown
set :markdown, fenced_code_blocks: true, smartypants: true

activate :syntax, line_numbers: false

require 'middleman-syntax'

helpers do
  def example(&block)
    content = capture_html(&block)
    html = Middleman::Syntax::Highlighter.highlight(content, 'html')

    concat_content content
    concat_content "<div class='toggle-code-wrapper'><a href='#' class='toggle-code'>Toggle code</a></div>\n"
    concat_content html
  end
end

activate :external_pipeline,
         name: :webpack,
         command: build? ?
         "./node_modules/webpack/bin/webpack.js --bail" :
         "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
         source: ".tmp/dist",
         latency: 1

