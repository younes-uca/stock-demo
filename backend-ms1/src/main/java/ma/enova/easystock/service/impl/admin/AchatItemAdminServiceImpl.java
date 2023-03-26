package ma.enova.easystock.service.impl.admin;

import ma.enova.easystock.bean.core.AchatItem;
import ma.enova.easystock.bean.history.AchatItemHistory;
import ma.enova.easystock.dao.criteria.core.AchatItemCriteria;
import ma.enova.easystock.dao.criteria.history.AchatItemHistoryCriteria;
import ma.enova.easystock.dao.facade.core.AchatItemDao;
import ma.enova.easystock.dao.facade.history.AchatItemHistoryDao;
import ma.enova.easystock.dao.specification.core.AchatItemSpecification;
import ma.enova.easystock.service.facade.admin.AchatItemAdminService;
import ma.enova.easystock.zynerator.service.AbstractServiceImpl;
import ma.enova.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.enova.easystock.service.facade.admin.AchatAdminService ;
import ma.enova.easystock.service.facade.admin.ProduitAdminService ;


import java.util.List;
@Service
public class AchatItemAdminServiceImpl extends AbstractServiceImpl<AchatItem,AchatItemHistory, AchatItemCriteria, AchatItemHistoryCriteria, AchatItemDao,
AchatItemHistoryDao> implements AchatItemAdminService {



    public List<AchatItem> findByProduitId(Long id){
        return dao.findByProduitId(id);
    }
    public int deleteByProduitId(Long id){
        return dao.deleteByProduitId(id);
    }
    public List<AchatItem> findByAchatId(Long id){
        return dao.findByAchatId(id);
    }
    public int deleteByAchatId(Long id){
        return dao.deleteByAchatId(id);
    }

    public void configure() {
        super.configure(AchatItem.class,AchatItemHistory.class, AchatItemHistoryCriteria.class, AchatItemSpecification.class);
    }

    @Autowired
    private AchatAdminService achatService ;
    @Autowired
    private ProduitAdminService produitService ;
    public AchatItemAdminServiceImpl(AchatItemDao dao, AchatItemHistoryDao historyDao) {
        super(dao, historyDao);
    }

}