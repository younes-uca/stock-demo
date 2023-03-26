package ma.enova.easystock.zynerator.controller;

import ma.enova.easystock.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.enova.easystock.zynerator.converter.AbstractReferentielConverter;
import ma.enova.easystock.zynerator.criteria.BaseCriteria;
import ma.enova.easystock.zynerator.dto.ReferentielBaseDto;
import ma.enova.easystock.zynerator.history.HistBusinessObject;
import ma.enova.easystock.zynerator.service.IService;

public class AbstractReferentielController<T extends AuditBusinessObjectEnhanced, DTO extends ReferentielBaseDto, H extends HistBusinessObject, Criteria extends BaseCriteria, HistoryCriteria extends BaseCriteria, SERV extends IService<T, Criteria, HistoryCriteria>, CONV extends AbstractReferentielConverter<T, DTO, H>> extends AbstractController<T, DTO, H, Criteria, HistoryCriteria, SERV, CONV> {


    public AbstractReferentielController(SERV service, CONV converter) {
        super(service, converter);
    }

}
