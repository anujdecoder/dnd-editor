import { Trans } from '@lingui/macro'
import { merge } from 'lodash-es'
import React from 'react'
import { DndBlockItem } from '../../../types'
import Divider from '../../components/Divider'

export default {
    id: 'spacer',
    label: <Trans>Spacer</Trans>,
    render: (renderProps) => Divider.render(renderProps, 'spacer-1'),
    export: (renderProps) => Divider.export(renderProps, 'spacer-1'),
    image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABCIAAABKCAYAAABuOfV3AAAGEElEQVR4Ae3YMQ0AAAzDsPEn3bHI5RGoZO3KzREgQIAAAQIECBAgQIAAAQIEIoGLdswQIECAAAECBAgQIECAAAECBCZEeAICBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQICBE+AECBAgQIECAAAECBAgQIEAgExAiMmpDBAgQIECAAAECBAgQIECAgBDhBwgQIECAAAECBAgQIECAAIFMQIjIqA0RIECAAAECBAgQIECAAAECQoQfIECAAAECBAgQIECAAAECBDIBISKjNkSAAAECBAgQIECAAAECBAgIEX6AAAECBAgQIECAAAECBAgQyASEiIzaEAECBAgQIECAAAECBAgQIPDxB9AP76zJNQAAAABJRU5ErkJggg==',
    initialValues: {
        'spacer-1': merge({}, Divider.initialValues, {
            label: 'Spacer'
        })
    },
    parent: 'divider',
    settings: [
        {
            id: 'spacer-1',
            label: <Trans>Spacer - 1</Trans>,
            type: 'text',
            settings: Divider.settings
        }
    ],
    type: 'block'
} as DndBlockItem
