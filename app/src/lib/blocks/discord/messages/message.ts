import {BlockShape, InputShape, OutputType} from "$lib/utils/blockRegistryTool";

export default class DiscordMessage {
    getRegistry() {
        return {
            id: "message",
            color: "%{BKY_COLOUR_HUE}",
            blocks: [
                {
                    func: "send",
                    text: "Send Message in Channel: [CHANNEL]\nEvent: [EVENT]\nContent: [CONTENT]\nEmbeds: [EMBEDS]\nComponents: [COMPONENTS]\nEphemeral: [EPHEMERAL]",
                    inline: false,
                    shape: BlockShape.STATEMENT,
                    arguments: {
                        CHANNEL: {
                          type: InputShape.VALUE,
                          check: OutputType.Channel
                        },
                        EVENT: {
                            type: InputShape.VALUE,
                            check: OutputType.EventType,
                        },
                        CONTENT: {
                            type: InputShape.VALUE,
                            check: OutputType.STRING,
                        },
                        EMBEDS: {
                            type: InputShape.VALUE,
                            check: [...OutputType.ARRAY, ...OutputType.Embed],
                        },
                        COMPONENTS: {
                            type: InputShape.VALUE,
                            check: [...OutputType.ARRAY, ...OutputType.Component],
                        },
                        EPHEMERAL: {
                            type: InputShape.CHECKBOX,
                        },


                    },
                }
            ]
        }
    }
}