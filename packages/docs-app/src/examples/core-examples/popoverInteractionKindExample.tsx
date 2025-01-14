/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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

import * as React from "react";

import { Button, Intent, Popover, type PopoverInteractionKind } from "@blueprintjs/core";
import { Example, type ExampleProps } from "@blueprintjs/docs-theme";

import { FileMenu } from "./common/fileMenu";

export class PopoverInteractionKindExample extends React.PureComponent<ExampleProps> {
    public static displayName = "PopoverInteractionKindExample";

    public render() {
        return (
            <Example className="docs-popover-interaction-kind-example" options={false} {...this.props}>
                <div>
                    {this.renderPopover("hover")}
                    {this.renderPopover("hover-target")}
                    {this.renderPopover("click")}
                    {this.renderPopover("click-target")}
                </div>
            </Example>
        );
    }

    private renderPopover(interactionKind: PopoverInteractionKind) {
        // MenuItem's default shouldDismissPopover={true} behavior is confusing
        // in this example, since it introduces an additional way popovers can
        // close. set it to false here for clarity.
        return (
            <Popover
                enforceFocus={false}
                placement="bottom-end"
                interactionKind={interactionKind}
                content={<FileMenu shouldDismissPopover={false} />}
                renderTarget={({ isOpen, ...p }) => (
                    <Button {...p} active={isOpen} intent={Intent.PRIMARY} text={interactionKind} />
                )}
            />
        );
    }
}
