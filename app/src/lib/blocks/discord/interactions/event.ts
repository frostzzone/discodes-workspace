import {BlockShape, InputShape, OutputType} from "../../../utils/blockRegistryTool";
import {inputTypes} from "blockly";

export default class EventInteraction {
    getRegistry() {
        return {
            id: "interaction",
            color: "%{BKY_COLOUR_HUE}",
            blocks: [
                {
                    func: "event",
                    text: "When [EVENT] is used\n",
                    inline: true,
                    shape: BlockShape.EVENT,
                    branches: 1,
                    arguments: {
                        EVENT: {
                            type: InputShape.MENU,
                            options: [
                                ['context menu', 'context'],
                                ['select menu', 'select'],
                                ['modal', 'modal'],
                                ['slash command', 'slash'],
                                ['any of the interactions', 'universal']

                            ],
                        },




                    },
                },
            ]
        }
    }
    event(args: any) {
        return `s4d.client.on(Discord.Events.InteractionCreate, async (interaction) => {
        ${args.BRANCH1}
        })`
    }

}