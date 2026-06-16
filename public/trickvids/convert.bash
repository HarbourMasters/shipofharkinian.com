for FILE in *.mp4 ; do
    OUTNAME=`basename "$FILE" .mp4`.webm
    ffmpeg -i $FILE -c:v libaom-av1 -crf 30 -b:v 150000 $OUTNAME
done
