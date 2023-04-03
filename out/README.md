# Results

Here is the main folder in which the output images will be stored.

Feel free to create sub folders, or use another location, as long as you change the `output` value in the `app.config.json` file located at the project root folder.

The reference image must be a PNG file named `ref.png`.

The program will create three sub-folders : `step`, `lattest` and `strokes`.

The `strokes` folder will only be used for generating the images.

The `step` folder will be used to store the images generated for one step.

The resulting final image for each step will be stored in the `lattest` folder.

Both `strokes` and `step` folders will be removed when the program will have completed the evolution.
