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
} from "./ImprotantNotice.styles";

import IMAGES from "../../../../assets/images";

const ImportantNotice = () => {
    return (
        <NoticeContainer>

            <NoticeContent>

                <NoticeIcon>

                    <FiInfo />

                </NoticeIcon>

                <NoticeText>

                    <NoticeTitle>
                        Importante
                    </NoticeTitle>

                    <NoticeDescription>
                        Las políticas pueden variar en tours de alta montaña,
                        expediciones o experiencias privadas.
                    </NoticeDescription>

                    <NoticeDescription>
                        Esta información se confirmará antes de finalizar tu reserva.
                    </NoticeDescription>

                </NoticeText>

            </NoticeContent>

            <MountainDecoration
                src={IMAGES.helpers.cancellation.mountain}
                alt=""
            />

        </NoticeContainer>
    );
};

export default ImportantNotice;