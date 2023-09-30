import {BlockShape, InputShape, OutputType} from "$lib/utils/blockRegistryTool";
import {inputTypes} from "blockly";

export default class EventInteraction {
    getRegistry() {
        return {
            id: "interaction",
            color: "%{BKY_COLOUR_HUE}",
            blocks: [
                {
                    func: "event",
                    text: "When [EVENT] event ",
                    inline: true,
                    shape: BlockShape.EVENT,
                    branches: 1,
                    arguments: {
                        EVENT: {
                            type: InputShape.MENU,
                            options: [
                                ['context menu is used', 'context'],
                                ['select menu is used', 'select'],
                                ['modal is used', 'modal'],
                                ['slash command is used', 'slash']

                            ],
                        },


                    },
                },
            ]
        }
    }
    event(args: any) {
        return `func ${args.EVENT}`
    }

}