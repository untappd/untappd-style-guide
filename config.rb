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

activate :syntax, line_numbers: true

require 'middleman-syntax'

helpers do
  def example(&block)
    content = capture_html(&block)
    html = Middleman::Syntax::Highlighter.highlight(content, 'html')

    concat_content content
    concat_content "<a href='#' class='toggle-code'>Toggle code</a>\n"
    concat_content html
  end
end

activate :sprockets

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
