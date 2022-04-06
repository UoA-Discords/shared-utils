import { DiscordAPI } from '../src';

describe('DiscordAPI/getInviteData', () => {
    it('gets guild data', async () => {
        const res = await DiscordAPI.getInviteData('dsfpFTR4gw');
        if (!res.success) throw new Error('Should be successful');
        expect(res.data.guild?.id).toEqual('815732601302155275');
        expect(res.data.inviter?.id).toEqual('240312568273436674');
        expect(res.data.approximate_member_count).toBeDefined();
    });

    it('handles an invalid invite', async () => {
        const res = await DiscordAPI.getInviteData('someFakeInviteCode');

        /** Fun fact Typescript shits itself if I don't have the `=== true` here. */
        if (res.success === true) throw new Error('Should have failed');
        expect(res.error.response?.data?.code).toBe(10006); // code for 'unknown invite'
    });
});
