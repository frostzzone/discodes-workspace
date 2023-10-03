import TestBlocks from "./test/test"
import js from "./js"
import messages from "$lib/blocks/discord/messages";
import interactions from "$lib/blocks/discord/interactions";
const  blockClasses = [ 
    TestBlocks,
    ...js,
    ...interactions,
    ...messages,
    ]

export default blockClasses;