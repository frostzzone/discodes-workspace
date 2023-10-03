import {BlockShape, InputShape, OutputType} from "$lib/utils/blockRegistryTool";

export default class DiscordMessage {
    getRegistry() {
        return {
            id: "message",
            color: "%{BKY_COLOUR_HUE}",
            blocks: [
                {
                    func: "send",
                    text: "Send Message in Channel or use Event: [CHANNEL]\nContent: [CONTENT]\nEmbeds: [EMBEDS]\nComponents: [COMPONENTS]\nEphemeral: [EPHEMERAL]",
                    inline: false,
                    shape: BlockShape.STATEMENT,
                    arguments: {
                        CHANNEL: {
                          type: InputShape.VALUE,
                          check: [...OutputType.Channel, ...OutputType.EventType]
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
                    
                    
Channel or Event field: what channel or use Event(for example interaction event) you want the message to be sent in. This field is not for a channel ID.
Content: String block field 
Embeds: A list of embeds
Components: A list of components
Ephemeral: if this is checked then the reply will show 
`,
                }
            ]
        }
    }
    send(args: any) {
        if(!args.CHANNEL) {
            return "console.error(`INCOMPLETE BLOCK: send message in channel block, CHANNEL OR EVENT IS EMPTY`)"
        }
        args.
        return `await ${args.CHANNEL}.reply({
            ephemeral: ${(args.EPHEMERAL as string).toLowerCase()},
            embeds: ${args.EMBEDS? args.EMBEDS : "[]"},
            content: ${args.CONTENT? args.CONTENT : '""'}
            components: ${args.COMPONENTS? args.COMPONENTS : "[]"}
            allowedMentions: '',
            files: '',
        })`
    }

}