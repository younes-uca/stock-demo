package  ma.enova.easystock.dao.specification.core;

import ma.enova.easystock.zynerator.specification.AbstractSpecification;
import ma.enova.easystock.dao.criteria.core.AchatCriteria;
import ma.enova.easystock.bean.core.Achat;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class AchatSpecification extends  AbstractSpecification<AchatCriteria, Achat>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("reference", criteria.getReference(),criteria.getReferenceLike());
        addPredicate("dateAchat", criteria.getDateAchat(), criteria.getDateAchatFrom(), criteria.getDateAchatTo());
        addPredicateBigDecimal("total", criteria.getTotal(), criteria.getTotalMin(), criteria.getTotalMax());
        addPredicateBigDecimal("totalPaye", criteria.getTotalPaye(), criteria.getTotalPayeMin(), criteria.getTotalPayeMax());
        addPredicateFk("client","id", criteria.getClient()==null?null:criteria.getClient().getId());
        addPredicateFk("client","cin", criteria.getClient()==null?null:criteria.getClient().getCin());
    }

    public AchatSpecification(AchatCriteria criteria) {
        super(criteria);
    }

    public AchatSpecification(AchatCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
