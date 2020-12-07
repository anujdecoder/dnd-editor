import { Trans } from '@lingui/macro'
import React from 'react'
import { DndTemplateItem } from '../../types'
import { Grid, IconButton } from '@material-ui/core'
import { Brush } from '@material-ui/icons'

export default {
    id: 'form',
    type: 'template',
    render: (renderProps, children) => {
        const stateItem = renderProps.state.entities.form
        return (
            <div style={stateItem?.values?.outer?.style}>
                <Grid container justify="flex-end">
                    <div style={{ padding: '0px 20px', cursor: 'pointer' }}>
                        <IconButton>
                            <Brush />
                        </IconButton>
                    </div>
                </Grid>
                <div style={stateItem?.values?.inner?.style}>{children}</div>
            </div>
        )
    },
    export: (renderProps, children) => {
        return ''
    },
    initialValues: {
        outer: {
            style: {
                backgroundColor: '#eee',
                padding: '16px 0px 16px 0px',
                boxSizing: 'border-box'
            }
        },
        inner: {
            style: {
                position: 'relative',
                width: 600,
                borderRadius: '0px',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                fontFamily: 'Poppins, sans-serif',
                padding: '0px 0px 0px 0px',
                color: '#000',
                margin: 'auto'
            }
        }
    },
    settings: [
        {
            label: <Trans>Outer Container</Trans>,
            id: 'outer',
            type: 'template',
            settings: [
                { id: 'style.backgroundColor', type: 'backgroundColor', grid: 12 },
                { id: 'style.padding', type: 'padding', grid: 12 }
            ]
        },
        {
            label: <Trans>Inner Container</Trans>,
            id: 'inner',
            type: 'template',
            settings: [
                { id: 'style.fontFamily', type: 'fontFamily', grid: 12 },
                { id: 'style.color', type: 'fontColor', grid: 12 },
                { id: 'style.backgroundColor', type: 'backgroundColor', grid: 12 },
                { id: 'style.padding', type: 'padding', grid: 12 },
                { id: 'style.borderRadius', type: 'borderRadius', grid: 12 }
            ]
        }
    ]
} as DndTemplateItem