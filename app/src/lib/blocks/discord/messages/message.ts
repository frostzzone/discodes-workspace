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
                            check: [...OutputType.ARRAY/*, ...OutputType.Embed*/],
                        },
                        COMPONENTS: {
                            type: InputShape.VALUE,
                            check: [...OutputType.ARRAY/*, ...OutputType.Component*/],
                        },
                        EPHEMERAL: {
                            type: InputShape.CHECKBOX,
                        },


                    },
                    tooltip: `
                    IF YOU USE THE EVENT FIELD THE EVENT FIELD BE COUNTED AND SENT USING THAT
                    EPHEMERAL WORKS FOR INTERACTION EVENT ONLY
                    
                    
Channel: what channel you want the message to be sent in. This field is not for a channel ID.
Event: the current event block, for example you use "when slash command is used event", then you put the interaction block in here
Content: String block field 
Embeds: A list of embeds
Components: A list of components
Ephemeral: if this is checked then the reply will show 
`,
                }
            ]
        }
    }
}