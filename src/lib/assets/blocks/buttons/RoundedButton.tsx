import { Trans } from '@lingui/macro'
import { merge } from 'lodash-es'
import React from 'react'
import { DndBlockItem } from '../../../types'
import Button from '../../components/Button'

export default {
    id: 'roundedButton',
    label: <Trans>Rounded Button</Trans>,
    export: (renderProps) => Button.export(renderProps, 'button-1'),
    render: (renderProps) => Button.render(renderProps, 'button-1'),
    image:
        'data:image/png;base64,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',
    initialValues: {
        'button-1': merge({}, Button.initialValues, {
            label: 'Rounded Button'
        })
    },
    parent: 'button',
    settings: [
        {
            id: 'button-1',
            label: <Trans>Rounded Button - 1</Trans>,
            type: 'button',
            settings: Button.settings
        }
    ],
    type: 'block'
} as DndBlockItem