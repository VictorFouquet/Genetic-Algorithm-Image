# Genetic Algorithm Image

Using genetic algorithm in order to reproduce a reference image.

## Roadmap

### Version 1.0 - Black rectangle on white background

Beginning simple, the first version of the algorithm should be able to reproduce a really basic image, composed of a black rectangle with a random width and height, placed at a random position on a white background.

The population is composed of individuals whose genes are composed of 4 numbers:

- x position of the rectangle's upper left corner
- y position of the rectangle's upper left corner
- width of the rectangle
- height of the rectangle

No geometry concept is involved in the searching process.

The fitness function computes the phenotype of each individual (being the generated black rectangle on white background).

The generated image's pixels are then compared to the reference image's pixels.

The population will try to minimize the number of mismatching pixels between generated images and the reference image.

### Version 1.1 - Black quadrilateres on white background

The reference image will be composed of a limited set of black convex quadrilateral shapes.

The individuals will store a certain amount of shapes, each shape being represented as a set of four 2d points.

The fitness function will once again try to minimize the number of mismatching pixels between generated images and the reference image.

#### Current results

The algorithm is used to solve a 100px * 100px random image.

Generated reference image :

![ref_image](/src/BinaryRectangleApp/out/binRef.png)

Initial population's fittest individual (here displayed in pink):

![bestStart](/src/BinaryRectangleApp/out/0.png)

Solution, reached at generation 85:

![bestFinal](/src/BinaryRectangleApp/out/85.png)

Overall evolution statistics:

![stats](/src/BinaryRectangleApp/out/testChart.png)


### Version 2.0 - Colored rectangle on colored background

The reference image will be composed of a colored rectangle drawn on a colored background.

The individual will store the same variables as in the 1.0 version, with 6 more variables to encode the two colors that are to be guessed (color space is still to be chosen, either RGB or HSL)

The fitness function will try to minimize the difference between the reference and generated images, using a mean squared errors function to compute the score of each individual.

### Version 2.1 - Colored quadrilateres on colored background

As in 1.1 version, several quadrilateral shapes will be rendered on the image, the difference being that the shapes and background will be colored.

Individuals' genes will still be composed of shapes represented by four 2d points, but 3 variables will be added to store the color of each shape.

Mean squared errors will be used by the fitness function in order to minimize the differences between reference image and and the generated images.

### Version 3 - Real world image

The final version of this project should be able to reproduce a real world image, being a photography, a painting, or any illustration.

The individuals will be composed of genes storing colored convex quadrilateres, with colors using 3 components plus an alpha channel.

We'll use once again the mean squared error approach to minimize the difference between the reference image and the generated images.

## Development

Prerequesites:

- node
- npm

Scripts:

```npm run compile``` to compile from TypeScript to ES6
```npm run binaryRectangle``` to run the Binary Rectangle problem (solutions will be written to ```./src/BinaryRectangleApp/out``` folder)