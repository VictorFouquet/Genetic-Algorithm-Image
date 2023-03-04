"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatRenderer = void 0;
const fs = require("fs");
const chartjs_node_canvas_1 = require("chartjs-node-canvas");
/**
 * Util class used to keep track of and render the population's evolution
 */
class StatRenderer {
    /**
     * Renders the population's evolution statistics
     * @param bestFitness best fitnesses of the population
     * @param avgFitness average fitnesses of the population
     * @param diversity diversity of the population
     * @param maxDiversity maximum diversity value
     * @param refImageSize minimum diversity value
     * @param output output folder to render graph
     * @param mutationRate population's mutation rate
     * @param executionTime evolution's total execution time
     */
    static render(bestFitness, avgFitness, diversity, maxDiversity, refImageSize, output, mutationRate, executionTime) {
        const config = StatRenderer.getConfig(bestFitness, avgFitness, diversity, refImageSize, maxDiversity, mutationRate, executionTime);
        // Creates chart
        let statChart = new chartjs_node_canvas_1.ChartJSNodeCanvas({ width: 1200, height: 700, backgroundColour: 'rgb(10, 10, 10)' });
        // Writes chart to file system
        fs.writeFileSync(output, statChart.renderToBufferSync(config, 'image/png'));
    }
    /**
     * Fills in configuration object with given variables
     * @param bestFitness best fitnesses of the population
     * @param avgFitness average fitnesses of the population
     * @param diversity diversity of the population
     * @param maxDiversity maximum diversity value
     * @param refImageSize minimum diversity value
     * @param mutationRate population's mutation rate
     * @param executionTime evolution's total execution time
     * @returns Configuration for the chart to render
     */
    static getConfig(bestFitness, avgFitness, diversity, maxDiversity, refImageSize, mutationRate, executionTime) {
        const minAvgFloored = Math.floor(Math.min(...avgFitness));
        const step = (100 - minAvgFloored) / 10;
        const labels = [];
        for (let i = 1; i <= avgFitness.length; i++) {
            labels.push(i);
        }
        return {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        yAxisID: 'yAxis',
                        label: 'Best fitness',
                        data: bestFitness,
                        borderColor: 'rgb(68, 242, 114)',
                        tension: 0.1
                    }, {
                        yAxisID: 'yAxis',
                        label: 'Average fitness',
                        data: avgFitness,
                        borderColor: 'rgb(74, 68, 242)',
                        tension: 0.1
                    }, {
                        yAxisID: 'yAxis2',
                        label: 'Diversity',
                        data: diversity,
                        borderColor: 'rgb(242, 68, 111)',
                        tension: 0.1
                    }]
            },
            options: {
                layout: {
                    padding: {
                        left: 20,
                        right: 50,
                        top: 15,
                        bottom: 15
                    }
                },
                plugins: {
                    legend: { display: true, labels: { boxHeight: 2 } },
                    title: {
                        text: 'BINARY RECTANGLE - GENETIC ALGORITHM\n' + [
                            `Ref. image size: ${refImageSize}*${refImageSize} px`,
                            `Population size: ${maxDiversity}`,
                            `Mutation rate: ${mutationRate}`,
                            `Execution time: ${executionTime}s`
                        ].join('   /  '),
                        display: true,
                        padding: {
                            top: 20,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    yAxis: {
                        grid: { color: 'rgb(20, 20, 20)' },
                        display: true,
                        min: minAvgFloored,
                        max: 100,
                        title: {
                            text: "Similarity(%)",
                            display: true
                        },
                        ticks: {
                            stepSize: step,
                            autoSkip: false
                        }
                    },
                    yAxis2: {
                        grid: { color: 'rgb(20, 20, 20)' },
                        position: 'right',
                        display: true,
                        min: 0,
                        max: maxDiversity,
                        title: {
                            text: "Diversity",
                            display: true
                        },
                        ticks: {
                            stepSize: 10,
                            autoSkip: false
                        }
                    },
                    xAxis: {
                        grid: { color: 'rgb(20, 20, 20)' },
                        display: true,
                        title: {
                            text: "Generations",
                            display: true
                        }
                    }
                }
            }
        };
    }
}
exports.StatRenderer = StatRenderer;
