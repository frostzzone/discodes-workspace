import TestBlocks from "./test/test"
import js from "./js"
import interactions from "$lib/blocks/interactions";
const  blockClasses = [ 
    TestBlocks,
    ...js,
    ...interactions,
    ]

export default blockClasses;