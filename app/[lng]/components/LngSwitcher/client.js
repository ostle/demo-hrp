"use client";

import { LngSwitcherBase } from "./LngSwitcherBase";
import { useTranslation } from "../../../i18n/client";

export const LngSwitcher = ({ lng }) => {
	const { t } = useTranslation(lng, "navbar");
	return <LngSwitcherBase t={t} lng={lng} />;
};
