// import { map } from 'lodash-es'
// import { bindHover, bindPopper, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks'
// import { nanoid } from 'nanoid'
import React from 'react'
import { useDndEditorContext } from '../../DndEditorProvider'

import { WysiwygEditor, WysiwygEditorProps } from '@harryy/wysiwyg-editor'

interface Props extends Omit<WysiwygEditorProps, 'value' | 'onChange'> {
    value?: string
    onChange?: (text: string) => void
}

// const useStyles = makeStyles(({ zIndex }: Theme) => ({
// button: {
//     minWidth: 0
// },
// popper: {
//     zIndex: zIndex.tooltip,
//     maxHeight: 320,
//     overflow: 'auto'
// }
// }))

const Editor: React.FC<Props> = ({ value, onChange, ...props }) => {
    // const classes = useStyles()
    // const popupId = React.useRef(`popup-${nanoid()}`).current
    // const menuId = React.useRef(`menu-${nanoid()}`).current

    const { smartyTags } = useDndEditorContext()
    const suggestions = React.useRef(Object.keys(smartyTags ?? {}).map((key) => `{{${key}}}`))
        .current
    // const allTags = map(smartyTags, (value, key) => `{{${key}}}`)
    //
    // const editorConfiguration = React.useMemo(
    //     () =>
    //         allTags.length
    //             ? {
    //                   mention: {
    //                       feeds: [
    //                           {
    //                               marker: '{',
    //                               feed: allTags,
    //                               minimumCharacters: 0
    //                           }
    //                       ]
    //                   }
    //               }
    //             : {},
    //     [smartyTags]
    // )

    // const containerRef = React.useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>
    // const editorRef = React.useRef<any>()

    // const popupState = usePopupState({
    //     popupId,
    //     variant: 'popper'
    // })
    // const menuState = usePopupState({
    //     popupId: menuId,
    //     variant: 'popper'
    // })

    // const handleTagInsert = (tag: string) => {
    //     menuState.close()
    //     const model = editorRef.current?.editor.model
    //     const range = model.document.selection.getLastRange()
    //     model.change((writer: any) => {
    //         const attributesMap = new Map()
    //         attributesMap.set('mention', {
    //             id: tag,
    //             text: tag,
    //             uid: nanoid(5),
    //             _text: tag
    //         })
    //         model.insertContent(writer.createText(tag, attributesMap), range)
    //         model.insertContent(writer.createText(' '), range.start.getShiftedBy(tag.length))
    //     })
    // }
    return (
        <>
            {/*<ClickAwayListener*/}
            {/*    onClickAway={() => {*/}
            {/*        popupState.close()*/}
            {/*        menuState.close()*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div {...bindHover(popupState)} ref={containerRef}>*/}
            {/*{smartyTags && (*/}
            {/*    <>*/}
            {/*        <Popper*/}
            {/*            {...bindPopper(menuState)}*/}
            {/*            className={classes.popper}*/}
            {/*            placement="right-start"*/}
            {/*        >*/}
            {/*            <Card variant="outlined">*/}
            {/*                <List dense>*/}
            {/*                    {allTags.map((tag, i) => (*/}
            {/*                        <ListItem*/}
            {/*                            button*/}
            {/*                            key={i}*/}
            {/*                            onClick={() => handleTagInsert(tag)}*/}
            {/*                        >*/}
            {/*                            {tag}*/}
            {/*                        </ListItem>*/}
            {/*                    ))}*/}
            {/*                </List>*/}
            {/*            </Card>*/}
            {/*        </Popper>*/}
            {/*        <Popper*/}
            {/*            {...bindPopper(popupState)}*/}
            {/*            placement="right-start"*/}
            {/*            open={!menuState.isOpen && popupState.isOpen}*/}
            {/*            className={classes.popper}*/}
            {/*        >*/}
            {/*            <Card variant="outlined">*/}
            {/*                <Button*/}
            {/*                    className={classes.button}*/}
            {/*                    {...bindTrigger(menuState)}*/}
            {/*                    onClick={() => menuState.open(containerRef.current)}*/}
            {/*                >*/}
            {/*                    {'{{'}&middot;&middot;{'}}'}*/}
            {/*                </Button>*/}
            {/*            </Card>*/}
            {/*        </Popper>*/}
            {/*    </>*/}
            {/*)}*/}

            <WysiwygEditor
                suggestions={suggestions}
                value={value}
                onChange={onChange}
                {...props}
                // ref={editorRef}
                // editor={BalloonEditor}
                // config={editorConfiguration}
                // value={textRef.current}
                // onChange={(event: any, editor: any) => {
                //     textRef.current = editor.getData()
                // }}
            />
            {/*</div>*/}
            {/*</ClickAwayListener>*/}
        </>
    )
}

export default Editor
