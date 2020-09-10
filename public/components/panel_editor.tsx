/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import {
  EuiColorPicker,
  EuiFormRow,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiTitle,
} from '@elastic/eui';
import React from 'react';
import { GanttParams, PlotlyLegendOrientation, VisOptionsProps } from '../gantt_vis_type';

export function PanelEditor({ aggs, stateParams, setValue }: VisOptionsProps<GanttParams>) {
  const legendOrientationOptions: Array<{ value: PlotlyLegendOrientation; text: string }> = [
    { value: 'v', text: 'Vertical' },
    { value: 'h', text: 'Horizontal' },
  ];

  const renderLegendOptions = () => {
    return (
      <EuiPanel paddingSize="s">
        <EuiTitle size="xs">
          <h3>Settings</h3>
        </EuiTitle>
        <EuiSpacer size="s" />

        <EuiFormRow label="Legend orientation">
          <EuiSelect
            options={legendOrientationOptions}
            value={stateParams.legendOrientation}
            onChange={(e) =>
              setValue('legendOrientation', e.target.value as PlotlyLegendOrientation)
            }
            disabled={!stateParams.showLegend}
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiSwitch
            label="Show legend"
            checked={stateParams.showLegend}
            onChange={(e) => setValue('showLegend', e.target.checked)}
          />
        </EuiFormRow>
      </EuiPanel>
    );
  };

  const renderGridOptions = () => {
    return (
      <EuiPanel paddingSize="s">
        <EuiTitle size="xs">
          <h3>Grid</h3>
        </EuiTitle>
        <EuiSpacer size="s" />

        <EuiFormRow>
          <EuiSwitch
            label="Show X-axis lines"
            checked={stateParams.xAxisShowGrid}
            onChange={(e) => setValue('xAxisShowGrid', e.target.checked)}
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiSwitch
            label="Show Y-axis lines"
            checked={stateParams.yAxisShowGrid}
            onChange={(e) => setValue('yAxisShowGrid', e.target.checked)}
          />
        </EuiFormRow>
      </EuiPanel>
    );
  };

  const renderColorOptions = () => {
    return (
      <EuiPanel paddingSize="s">
        <EuiTitle size="xs">
          <h3>Colors</h3>
        </EuiTitle>
        <EuiSpacer size="s" />

        <EuiFormRow>
          <EuiSwitch
            label="Use default colors"
            checked={stateParams.useDefaultColors}
            onChange={(e) => setValue('useDefaultColors', e.target.checked)}
          />
        </EuiFormRow>
        <EuiFormRow label="Color">
          <EuiColorPicker
            color={stateParams.colors}
            onChange={(e) => setValue('colors', e)}
            disabled={stateParams.useDefaultColors}
          />
        </EuiFormRow>
      </EuiPanel>
    );
  };

  return (
    <>
      {renderLegendOptions()}
      <EuiSpacer size="s" />
      {renderGridOptions()}
      <EuiSpacer size="s" />
      {renderColorOptions()}
    </>
  );
}
