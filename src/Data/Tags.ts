export enum TagNames {
    Arts = `Arts`,
    Business = `Business`,
    CreativeArts = `Creative Arts`,
    Education = `Education`,
    Engineering = `Engineering`,
    Law = `Law`,
    HealthAndMedicine = `Health & Medicine`,
    Science = `Science`,
    Research = `Research`,
    Club = `Club`,
    Statistics = `Statistics`,
    ComputerScience = `Computer Science`,
}

/** Maps tag names to their description. */
export const TagDescriptionsMap: Record<TagNames, string> = {
    [TagNames.Arts]: `Faculty of Arts`,

    [TagNames.Business]: `Business School`,

    [TagNames.CreativeArts]: `Faculty of Creative Arts and Industries`,

    [TagNames.Education]: `Faculty of Education and Social Work`,

    [TagNames.Engineering]: `Faculty of Engineering`,

    [TagNames.Law]: `Faculty of Law`,

    [TagNames.HealthAndMedicine]: `Faculty of Medical and Health Sciences`,

    [TagNames.Science]: `Faculty of Science`,

    [TagNames.Research]: `Research institues and centres`,

    [TagNames.Club]: `Clubs, societies, and associations`,

    [TagNames.Statistics]: `Department of Statistics`,

    [TagNames.ComputerScience]: `School of Computer Science`,
};
