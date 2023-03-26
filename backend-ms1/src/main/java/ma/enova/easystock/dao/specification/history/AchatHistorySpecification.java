package  ma.enova.easystock.dao.specification.history;

import ma.enova.easystock.zynerator.specification.AbstractHistorySpecification;
import ma.enova.easystock.dao.criteria.history.AchatHistoryCriteria;
import ma.enova.easystock.bean.history.AchatHistory;


public class AchatHistorySpecification extends AbstractHistorySpecification<AchatHistoryCriteria, AchatHistory> {

    public AchatHistorySpecification(AchatHistoryCriteria criteria) {
        super(criteria);
    }

    public AchatHistorySpecification(AchatHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
