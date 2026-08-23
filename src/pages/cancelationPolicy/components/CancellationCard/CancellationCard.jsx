import PropTypes from "prop-types";

import {
    FaCircleCheck
} from "react-icons/fa6";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiCheckCircle
} from "react-icons/fi";
import {
    HiOutlineExclamationTriangle
} from "react-icons/hi2";

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
} from "./CancellationCard.styles";
import {
    InfoRow,
    InfoIcon,
    InfoText,
    StyledTable,
    StyledList,
    InfoBlock
} from "../../Cancellation.styles";
import { Trans } from "react-i18next";

const ICONS = {
    check: FaCircleCheck,
    warning: HiOutlineExclamationTriangle,
    phone: FiPhone,
    mail: FiMail,
    location: FiMapPin
};

const CancellationCard = ({
    titleKey,
    type,
    contentKey,
    fields,
    table,
    noteKey,
    items,
    introKey,
    icon
}) => {

    const Icon = icon ? ICONS[icon] : null;

    const renderContent = () => {
        switch (type){
            case "paragraph":
                return (
                    <Trans 
                    ns="cancellation"
                    i18nKey={contentKey}
                    components = {[
                        <p />
                    ]}
                    />
                );
            
            case "fields": 
                return (
                    <>
                        {fields.map((field) => (
                            <InfoBlock key={field.labelKey}>
                                
                                <Trans 
                                ns="cancellation"
                                i18nKey={field.labelKey}
                                components={[
                                    <strong />
                                ]}
                                />

                                <Trans 
                                ns="cancellation"
                                i18nKey={field.valueKey}
                                components={[
                                    <p />
                                ]}
                                />
                            </InfoBlock>
                    ))}        
                    </>
                );
            
            case "table":
                return (
                    <>
                    <StyledTable>
                        <thead>
                            <tr>
                                {
                                    table.headers.map((header) => (
                                        <Trans 
                                        key={header}
                                        ns="cancellation"
                                        i18nKey={header}
                                        components={[
                                            <th />
                                        ]}
                                        />
                                    ))
                                }
                            </tr>
                        </thead>

                        <tbody>
                            {
                                table.rows.map((row, index) => (
                                    <tr key={index}>
                                        {row.map((cell, cellIndex) => (
                                            <Trans 
                                            key={cellIndex}
                                            ns="cancellation"
                                            i18nKey={cell}
                                            components={[
                                                <td />
                                            ]}
                                            />
                                        ))}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </StyledTable>

                    {noteKey && (
                        <p>
                            <Trans 
                            ns="cancellation"
                            i18nKey={noteKey}
                            components={[
                                <strong />
                            ]}
                            />
                        </p>
                    )}
                    </>
                );

            case "iconList":
                return (
                    <>
                    {
                        items.map((item) => {
                            const ItemIcon = ICONS[item.icon];

                            return (
                                <InfoRow key={item.textKey}>
                                    <InfoIcon>
                                        <ItemIcon />
                                    </InfoIcon>

                                    <Trans 
                                    ns="cancellation"
                                    i18nKey={item.textKey}
                                    components={[
                                        <InfoText />
                                    ]}
                                    />
                                    
                                </InfoRow>
                            )
                        })
                    }
                    </>
                );

            case "iconText":
                return (
                    <InfoRow>
                        <InfoIcon>
                            {Icon && <Icon />}
                        </InfoIcon>

                        <Trans 
                        ns="cancellation"
                        i18nKey={contentKey}
                        components={[
                            <InfoText />
                        ]}
                        />
                        
                    </InfoRow>
                );

            case "list":
                return (
                    <>
                        {introKey && (
                            <Trans 
                            ns="cancellation"
                            i18nKey={introKey}
                            components={[
                                <p />
                            ]}
                            />
                        )}

                        <StyledList>
                            {
                                items.map((item) => (
                                    <Trans 
                                    key={item}
                                    ns="cancellation"
                                    i18nKey={item}
                                    components={[
                                        <li />
                                    ]}
                                    />
                                ))
                            }
                        </StyledList>
                    </>
                );
            
            case "contact": 
                return (
                    <>
                    <Trans 
                    ns="cancellation"
                    i18nKey={introKey}
                    components={[
                        <p />
                    ]}
                    />
                    
                    {
                        items.map((item) => {
                            const ContactIcon = ICONS[item.icon];

                            return (
                                <InfoRow key={item.value}>

                                    <InfoIcon>
                                        <ContactIcon />
                                    </InfoIcon>

                                    <InfoText>
                                        {item.value}
                                    </InfoText>
                                </InfoRow>
                            )
                        })
                    }
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <Card>
            <CardHeader>
                <Trans 
                ns="cancellation"
                i18nKey={titleKey}
                components={[
                    <CardTitle />
                ]}
                />
            </CardHeader>

            <CardBody>
                {renderContent()}
            </CardBody>
        </Card>
    );
};

CancellationCard.propTypes = {
    titleKey: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,

    contentKey: PropTypes.string,

    fields: PropTypes.array,
    table: PropTypes.object,

    noteKey: PropTypes.string,

    items: PropTypes.array,

    introKey: PropTypes.string,

    icon: PropTypes.string,
};

export default CancellationCard;

