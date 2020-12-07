import { Trans } from '@lingui/macro'
import { Grid } from '@material-ui/core'
import { useFormikContext } from 'formik'
import { keyBy, map } from 'lodash-es'
import React from 'react'
import { useDndEditorContext } from '../../DndEditorProvider'
import { Condition, DndItemSetting } from '../../types'
import Dropdown, { DropdownOption } from './components/Dropdown'
import Input from './components/Input'
import SettingsBase from './SettingsBase'
import Field from './items/Field'

interface Props {
    expanded: string
    setExpanded: React.Dispatch<React.SetStateAction<string>>
    showContainerTab: boolean
}

const displayOptions: DropdownOption[] = [
    {
        id: 'ALWAYS',
        label: <Trans>Always display</Trans>
    },
    {
        id: 'DISPLAY',
        label: <Trans>Display if</Trans>
    }
]
const operatorOptions: DropdownOption[] = [
    { id: 'EQUAL', label: <Trans>Equals</Trans> },
    { id: 'NOT_EQUAL', label: <Trans>Does not equals</Trans> },
    { id: 'IN', label: <Trans>Contains</Trans> }
]

const ConditionRule: React.FC = () => {
    const { values } = useFormikContext<Condition>()
    const {
        smartyTags,
        state: { entities, items }
    } = useDndEditorContext()
    let fields = map(smartyTags, (label, id) => ({ id, label }))
    const formFields: any[] = items
        .map((item) => entities[item.id])
        .filter((entity) => entity.parent.type !== 'template')
        .map((entity) =>
            Object.keys(entity.values)
                .filter((key) => key !== '__container' && key !== '__condition')
                .map((valueKey) => ({
                    id: `${entity.name}.${valueKey}`,
                    label: `${entity.name}.${valueKey}`
                }))
        )
    const flatFormFields = [].concat.apply([], formFields)
    fields = fields.concat(flatFormFields)
    return (
        <>
            <Grid item xs={12}>
                <Field
                    name="display"
                    Component={Dropdown}
                    defaultValue="ALWAYS"
                    SelectProps={{ displayEmpty: true }}
                    options={displayOptions}
                />
            </Grid>
            {Boolean(values.display && values.display !== 'ALWAYS') && (
                <>
                    <Grid item xs={12}>
                        <Field
                            name="rules.0.id"
                            Component={Dropdown}
                            options={fields}
                            placeholder="Select Field"
                        />
                        <Field
                            name="rules.0.operator"
                            defaultValue="EQUAL"
                            Component={Dropdown}
                            options={operatorOptions}
                        />
                        <Field name="rules.0.value" Component={Input} placeholder="Value" />
                    </Grid>
                </>
            )}
        </>
    )
}

const ConditionSettings: React.FC<Props> = (props) => {
    const editorContext = useDndEditorContext()
    const activeItem = editorContext.active
        ? editorContext.itemsMap[editorContext.state.entities[editorContext.active].parent.id]
        : null
    if (!activeItem || !editorContext.active) {
        return null
    }
    const settings: DndItemSetting[] = [
        {
            id: '__condition',
            settings: [],
            label: <Trans>Condition</Trans>,
            type: 'template'
        }
    ]
    const values = editorContext.state.entities[editorContext.active]?.values ?? {}

    return (
        <SettingsBase
            {...props}
            renderProps={editorContext}
            initialValues={values}
            settings={settings}
            id={editorContext.active}
        >
            <ConditionRule />
        </SettingsBase>
    )
}

export default ConditionSettings
