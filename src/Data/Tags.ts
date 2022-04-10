import Tag from '../Types/Tag';

/** Use these to index the {@link Tags} object. */
export enum TagNames {
    Arts,
    Business,
    CreativeArts,
    Education,
    Engineering,
    Law,
    HealthAndMedicine,
    Science,
    Research,
    Club,
    Statistics,
    ComputerScience,
}

/** Maps tag indexes to their name and description. */
const Tags: Record<TagNames, Tag> = {
    [TagNames.Arts]: {
        name: `Arts`,
        description: `Faculty of Arts`,
    },
    [TagNames.Business]: {
        name: `Business`,
        description: `Business School`,
    },
    [TagNames.CreativeArts]: {
        name: `Creative Arts`,
        description: `Faculty of Creative Arts and Industries`,
    },
    [TagNames.Education]: {
        name: `Education`,
        description: `Faculty of Education and Social Work`,
    },
    [TagNames.Engineering]: {
        name: `Engineering`,
        description: `Faculty of Engineering`,
    },
    [TagNames.Law]: {
        name: `Law`,
        description: `Faculty of Law`,
    },
    [TagNames.HealthAndMedicine]: {
        name: `Health & Medicine`,
        description: `Faculty of Medical and Health Sciences`,
    },
    [TagNames.Science]: {
        name: `Science`,
        description: `Faculty of Science`,
    },
    [TagNames.Research]: {
        name: `Research`,
        description: `Research institues and centres`,
    },
    [TagNames.Club]: {
        name: `Club`,
        description: `Clubs, societies, and associations`,
    },
    [TagNames.Statistics]: {
        name: `Statistics`,
        description: `Department of Statistics`,
    },
    [TagNames.ComputerScience]: {
        name: `Computer Science`,
        description: `School of Computer Science`,
    },
};

export default Tags;
