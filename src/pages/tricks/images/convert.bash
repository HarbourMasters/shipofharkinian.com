for FILE in *.png ; do
    OUTNAME=`basename "$FILE" .png`.jpg
    magick $FILE -quality 89 $OUTNAME
done
