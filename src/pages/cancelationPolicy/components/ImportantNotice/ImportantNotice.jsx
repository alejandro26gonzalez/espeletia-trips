import {
    FiInfo,
} from "react-icons/fi";

import {
    NoticeContainer,
    NoticeContent,
    NoticeIcon,
    NoticeText,
    NoticeTitle,
    NoticeDescription,
    MountainDecoration,
} from "./ImportantNotice.styles";
import { useTranslation } from "react-i18next";
import { cancellationConfig } from "../../../../config/pages/cancellation/cancellationConfig";

const ImportantNotice = () => {
    const {t} = useTranslation("cancellation");

    return (
        <NoticeContainer>

            <NoticeContent>

                <NoticeIcon>

                    <FiInfo />

                </NoticeIcon>

                <NoticeText>

                    <NoticeTitle>
                        {t(cancellationConfig.plainTextConfig.importantNotice.titleKey)}
                    </NoticeTitle>

                    <NoticeDescription>
                        {t(cancellationConfig.plainTextConfig.importantNotice.descriptionKey)}
                    </NoticeDescription>

                    <NoticeDescription>
                        {t(cancellationConfig.plainTextConfig.importantNotice.descriptionKey2)}
                    </NoticeDescription>

                </NoticeText>

            </NoticeContent>

            <MountainDecoration
                src={cancellationConfig.plainTextConfig.importantNotice.decorator}
                alt=""
            />

        </NoticeContainer>
    );
};

export default ImportantNotice;