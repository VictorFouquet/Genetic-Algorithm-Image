import { ChartConfiguration } from "chart.js";
/**
 * Util class used to keep track of and render the population's evolution
 */
export declare class StatRenderer {
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
    static render(bestFitness: number[], avgFitness: number[], diversity: number[], maxDiversity: number, refImageSize: number, output: string, mutationRate: number, executionTime: number): void;
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
    static getConfig(bestFitness: number[], avgFitness: number[], diversity: number[], maxDiversity: number, refImageSize: number, mutationRate: number, executionTime: number): ChartConfiguration;
}
