package ma.enova.easystock.service.impl.admin;

import ma.enova.easystock.bean.core.Produit;
import ma.enova.easystock.bean.history.ProduitHistory;
import ma.enova.easystock.dao.criteria.core.ProduitCriteria;
import ma.enova.easystock.dao.criteria.history.ProduitHistoryCriteria;
import ma.enova.easystock.dao.facade.core.ProduitDao;
import ma.enova.easystock.dao.facade.history.ProduitHistoryDao;
import ma.enova.easystock.dao.specification.core.ProduitSpecification;
import ma.enova.easystock.service.facade.admin.ProduitAdminService;
import ma.enova.easystock.zynerator.service.AbstractServiceImpl;
import ma.enova.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class ProduitAdminServiceImpl extends AbstractServiceImpl<Produit,ProduitHistory, ProduitCriteria, ProduitHistoryCriteria, ProduitDao,
ProduitHistoryDao> implements ProduitAdminService {


    public Produit findByReferenceEntity(Produit t){
        return  dao.findByReference(t.getReference());
    }


    public void configure() {
        super.configure(Produit.class,ProduitHistory.class, ProduitHistoryCriteria.class, ProduitSpecification.class);
    }

    public ProduitAdminServiceImpl(ProduitDao dao, ProduitHistoryDao historyDao) {
        super(dao, historyDao);
    }

}