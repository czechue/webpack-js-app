#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import chalk from 'chalk';

const CHOICES = fs.readdirSync(path.join(__dirname, '../templates'));

const QUESTIONS = [
    {
        name: 'template',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: CHOICES
    },
    {
        name: 'name',
        type: 'input',
        message: 'Project name:'
    }];

export interface CliOptions {
    projectName: string
    templateName: string
    templatePath: string
    targetPath: string
}

export interface Answer {
    name: string,
    template: string
}


const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS)
    .then((answers: inquirer.Answers) => {
        const projectChoice = answers['template'];
        const projectName = answers['name'];
        const templatePath = path.join(__dirname, '../templates', projectChoice);
        const targetPath = path.join(CURR_DIR, projectName)
        const options: CliOptions = {
            projectName,
            templateName: projectChoice,
            templatePath,
            targetPath
        }
        console.log(options);
    });