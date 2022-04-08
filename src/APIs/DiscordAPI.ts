import axios, { AxiosError, AxiosInstance } from 'axios';
import { Invite } from '../DiscordTypes';
import { User } from '../DiscordTypes/User';
import APIResponse from '../Types/APIResponse';

export default abstract class DiscordAPI {
    private static readonly _discord: AxiosInstance = axios.create({
        baseURL: `https://discord.com/api/v9`,
        headers: {
            'Content-Type': `aplication/json`,
        },
    });

    public static async getInviteData(invite: string): Promise<APIResponse<Invite>> {
        try {
            const { status, statusText, data } = await this._discord.get<Invite>(
                `/invites/${invite}?with_expiration=true&with_counts=true`,
            );

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to get invite data with messge: ${statusText}`, data);
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
}
