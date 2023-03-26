package ma.enova.easystock.service.impl.admin;

import ma.enova.easystock.bean.core.Achat;
import ma.enova.easystock.bean.history.AchatHistory;
import ma.enova.easystock.dao.criteria.core.AchatCriteria;
import ma.enova.easystock.dao.criteria.history.AchatHistoryCriteria;
import ma.enova.easystock.dao.facade.core.AchatDao;
import ma.enova.easystock.dao.facade.history.AchatHistoryDao;
import ma.enova.easystock.dao.specification.core.AchatSpecification;
import ma.enova.easystock.service.facade.admin.AchatAdminService;
import ma.enova.easystock.zynerator.service.AbstractServiceImpl;
import ma.enova.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.enova.easystock.bean.core.AchatItem;

import ma.enova.easystock.service.facade.admin.AchatItemAdminService ;
import ma.enova.easystock.service.facade.admin.ClientAdminService ;


import java.util.List;
@Service
public class AchatAdminServiceImpl extends AbstractServiceImpl<Achat,AchatHistory, AchatCriteria, AchatHistoryCriteria, AchatDao,
AchatHistoryDao> implements AchatAdminService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Achat create(Achat t) {
        super.create(t);
        if (t.getAchatItems() != null) {
                t.getAchatItems().forEach(element-> {
                    element.setAchat(t);
                    achatItemService.create(element);
            });
        }
        return t;
    }

    public Achat findWithAssociatedLists(Long id){
        Achat result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setAchatItems(achatItemService.findByAchatId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        achatItemService.deleteByAchatId(id);
    }


    public void updateWithAssociatedLists(Achat achat){
    if(achat !=null && achat.getId() != null){
            List<List<AchatItem>> resultAchatItems= achatItemService.getToBeSavedAndToBeDeleted(achatItemService.findByAchatId(achat.getId()),achat.getAchatItems());
            achatItemService.delete(resultAchatItems.get(1));
            ListUtil.emptyIfNull(resultAchatItems.get(0)).forEach(e -> e.setAchat(achat));
            achatItemService.update(resultAchatItems.get(0),true);
    }
    }

    public Achat findByReferenceEntity(Achat t){
        return  dao.findByReference(t.getReference());
    }

    public List<Achat> findByClientId(Long id){
        return dao.findByClientId(id);
    }
    public int deleteByClientId(Long id){
        return dao.deleteByClientId(id);
    }

    public void configure() {
        super.configure(Achat.class,AchatHistory.class, AchatHistoryCriteria.class, AchatSpecification.class);
    }

    @Autowired
    private AchatItemAdminService achatItemService ;
    @Autowired
    private ClientAdminService clientService ;
    public AchatAdminServiceImpl(AchatDao dao, AchatHistoryDao historyDao) {
        super(dao, historyDao);
    }

}