import axios, { AxiosError, AxiosInstance } from 'axios';
import { Invite, User, PartialGuild } from '../DiscordTypes';
import APIResponse from '../Types/APIResponse';

/** Handles making calls to the Discord API for both client and server. */
export default abstract class DiscordAPI {
    private static readonly _discord: AxiosInstance = axios.create({
        baseURL: `https://discord.com/api`,
        headers: {
            'Content-Type': `application/json`,
        },
    });

    public static async getInviteData(invite: string): Promise<APIResponse<Invite>> {
        try {
            const { status, statusText, data } = await this._discord.get<Invite>(
                `/invites/${invite}?with_expiration=true&with_counts=true`,
            );

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to get invite data with message: ${statusText}`, data);
            }

            return { success: true, data };
        } catch (error) {
            return {
                success: false,
                error: error as Error as AxiosError,
            };
        }
    }

    public static async getUserInfo(access_token: string): Promise<APIResponse<User>> {
        try {
            const { status, statusText, data } = await this._discord.get<User>(`/users/@me`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to get user info with messge: ${statusText}`, data);
            }

            return { success: true, data };
        } catch (error) {
            return {
                success: false,
                error: error as Error as AxiosError,
            };
        }
    }

    public static async getUserGuilds(access_token: string): Promise<APIResponse<PartialGuild[]>> {
        try {
            const { status, statusText, data } = await this._discord.get<PartialGuild[]>(`/users/@me/guilds`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to get user guilds with messge: ${statusText}`, data);
            }

            return { success: true, data };
        } catch (error) {
            return {
                success: false,
                error: error as Error as AxiosError,
            };
        }
    }
}
