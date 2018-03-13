import Discord = require("discord.js");

export abstract class CommandHandler {
    abstract onCommand(message: Discord.Message, command: string, args: string[]): void;
    abstract onReady(bot: Discord.Client): void;
}

export interface CommandHolder {
    command: Command;
    handler: CommandHandler;
}

export interface Command {
    aliases: string[];
    description: string;
}