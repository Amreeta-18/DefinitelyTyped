// Type definitions for @storybook/polymer 5.1
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/app/polymer
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Anton Izmailov <https://github.com/wapgear>
//                 Dan Dean <https://github.com/dandean>
//                 Ryan Coleman <https://github.com/ryuhhnn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

// tslint:disable:no-unnecessary-generics

/// <reference types="webpack-env" />

import { TemplateResult, SVGTemplateResult } from 'lit-element';

export type Renderable = TemplateResult | SVGTemplateResult;
export type RenderFunction = () => Renderable | Renderable[];

export interface DecoratorParameters {
    [key: string]: any;
}
export type StoryDecorator = (story: RenderFunction, context: { kind: string; story: string }) => Renderable | null;

export interface Story {
    readonly kind: string;
    add(storyName: string, callback: RenderFunction, parameters?: DecoratorParameters): this;
    addDecorator(decorator: StoryDecorator): this;
    addParameters(parameters: DecoratorParameters): this;
}

export function addDecorator(decorator: StoryDecorator): void;
export function addParameters(parameters: DecoratorParameters): void;
export function clearDecorators(): void;
export function configure(fn: () => void, module: NodeModule): void;
export function setAddon(addon: object): void;
export function storiesOf(name: string, module: NodeModule): Story;
export function storiesOf<T>(name: string, module: NodeModule): Story & T;
export function forceReRender(): void;

export interface StoryObject {
    name: string;
    render: RenderFunction;
}

export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
}

export function getStorybook(): StoryBucket[];
