#!/bin/bash
read -p "Y?:" selectedOption
selectedOption=${selectedOption^^} ## uppercase

if [ "$selectedOption" == "Y" ]; then
  echo "Moving shim dir to $pathToUgApp/public"
  cp -R src/main/webapp/dist/shim $pathToUgApp/public
  echo "Moving jsp to $pathToUgApp/shim-test.jsp"
  cp src/main/webapp/index.jsp $pathToUgApp/shim-test.jsp
  echo "Complete."
fi
