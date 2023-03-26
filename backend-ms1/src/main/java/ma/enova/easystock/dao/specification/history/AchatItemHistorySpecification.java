package  ma.enova.easystock.dao.specification.history;

import ma.enova.easystock.zynerator.specification.AbstractHistorySpecification;
import ma.enova.easystock.dao.criteria.history.AchatItemHistoryCriteria;
import ma.enova.easystock.bean.history.AchatItemHistory;


public class AchatItemHistorySpecification extends AbstractHistorySpecification<AchatItemHistoryCriteria, AchatItemHistory> {

    public AchatItemHistorySpecification(AchatItemHistoryCriteria criteria) {
        super(criteria);
    }

    public AchatItemHistorySpecification(AchatItemHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
