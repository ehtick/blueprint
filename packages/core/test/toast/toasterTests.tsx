/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as ReactDOM from "react-dom";

import { Toaster } from "../../src";

describe("Toaster", () => {
    let testsContainerElement: HTMLElement;

    before(() => {
        testsContainerElement = document.createElement("div");
        document.documentElement.appendChild(testsContainerElement);
    });

    afterEach(() => {
        // TODO(React 18): Replace deprecated ReactDOM methods. See: https://github.com/palantir/blueprint/issues/7167
        // eslint-disable-next-line deprecation/deprecation
        ReactDOM.unmountComponentAtNode(testsContainerElement);
    });

    describe("(v4.x backwards-compatibility)", () => {
        it("supports Toaster.create() method", () => {
            // eslint-disable-next-line deprecation/deprecation
            const toaster = Toaster.create({}, testsContainerElement);
            toaster.clear();
        });
    });
});
