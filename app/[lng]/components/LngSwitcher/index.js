import { useTranslation } from "../../../i18n";
import { LngSwitcherBase } from "./LngSwitcherBase";

export const LngSwitcher = async ({ lng }) => {
	const { t } = await useTranslation(lng, "navbar");
	return <LngSwitcherBase t={t} lng={lng} />;
};
