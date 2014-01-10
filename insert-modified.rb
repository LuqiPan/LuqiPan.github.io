def insert_modified(filename)
    File.open(filename, 'r') do |fin|
    File.open("./tmp", 'w') do |fout|
        while line = fin.gets
            fout.puts line unless line.start_with?("modified: \"")
            if line.start_with?("tags: [")
                fout.puts ("modified: \"" + File.mtime(filename).strftime("%Y-%m-%d %H:%M %Z\""))
            end
        end
    end
    end
end

Dir.glob("_posts/**/*") { |filename| 
    if filename[-3..-1] == ".md"
        puts filename
        insert_modified(filename)
        puts
    end
}
