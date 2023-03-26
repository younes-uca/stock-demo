package ma.enova.easystock.zynerator.service;

import ma.enova.easystock.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.enova.easystock.zynerator.criteria.BaseCriteria;
import ma.enova.easystock.zynerator.history.HistBusinessObject;
import ma.enova.easystock.zynerator.history.HistCriteria;
import ma.enova.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.enova.easystock.zynerator.repository.AbstractRepository;

public abstract class AbstractReferentielServiceImpl<T extends AuditBusinessObjectEnhanced, H extends HistBusinessObject, CRITERIA extends BaseCriteria, HC extends HistCriteria, REPO extends AbstractRepository<T, Long>, HISTREPO extends AbstractHistoryRepository<H, Long>> extends AbstractServiceImpl<T, H, CRITERIA, HC, REPO, HISTREPO> {

    public AbstractReferentielServiceImpl(REPO dao, HISTREPO historyRepository) {
    super(dao, historyRepository);
    }

}