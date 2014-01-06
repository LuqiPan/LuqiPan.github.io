Dir.glob("_posts/**/*") { |filename| 
    if filename[-3..-1] == ".md"
        puts filename
        puts File.mtime("filename")
    end
}
