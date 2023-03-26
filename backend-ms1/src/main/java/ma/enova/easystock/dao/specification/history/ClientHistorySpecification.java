package  ma.enova.easystock.dao.specification.history;

import ma.enova.easystock.zynerator.specification.AbstractHistorySpecification;
import ma.enova.easystock.dao.criteria.history.ClientHistoryCriteria;
import ma.enova.easystock.bean.history.ClientHistory;


public class ClientHistorySpecification extends AbstractHistorySpecification<ClientHistoryCriteria, ClientHistory> {

    public ClientHistorySpecification(ClientHistoryCriteria criteria) {
        super(criteria);
    }

    public ClientHistorySpecification(ClientHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
