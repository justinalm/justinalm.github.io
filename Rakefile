# Dependencies

require 'rubygems'
require 'optparse'
require 'yaml'

task :post do
  OptionParser.new.parse!
  ARGV.shift
  title = ARGV.join(' ')

  path = "_posts/#{Date.today}-#{title.downcase.gsub(/[^[:alnum:]]+/, '-')}.md"
  
  if File.exist?(path)
    puts "[WARN] File exists - skipping create"
  else
    File.open(path, "w") do |file|
      file.puts YAML.dump({'layout' => 'post', 'published' => false, 'title' => title, 'description' => 'Update this description.', 'thumbnail' => '/images/#.jpg'})
      file.puts "---"
    end
  end
  `subl #{path}`

  exit 1
end

# Rsync To Hosting
namespace :deploy do
  desc "rsync to stage"
    task :stage do
      system('rsync --compress --recursive --checksum --progress --delete _site/ justinal@justinalm.com:~/public_html/stage/')
    end
  desc "rsync to production"
    task :production do
      system('rsync --compress --recursive --checksum --progress --delete _site/ justinal@justinalm.com:~/public_html/')
    end
end