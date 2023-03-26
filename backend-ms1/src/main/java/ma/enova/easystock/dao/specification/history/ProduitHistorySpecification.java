package  ma.enova.easystock.dao.specification.history;

import ma.enova.easystock.zynerator.specification.AbstractHistorySpecification;
import ma.enova.easystock.dao.criteria.history.ProduitHistoryCriteria;
import ma.enova.easystock.bean.history.ProduitHistory;


public class ProduitHistorySpecification extends AbstractHistorySpecification<ProduitHistoryCriteria, ProduitHistory> {

    public ProduitHistorySpecification(ProduitHistoryCriteria criteria) {
        super(criteria);
    }

    public ProduitHistorySpecification(ProduitHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
