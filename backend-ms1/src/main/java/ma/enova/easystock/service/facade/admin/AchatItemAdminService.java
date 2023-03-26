package ma.enova.easystock.service.facade.admin;

import java.util.List;
import ma.enova.easystock.bean.core.AchatItem;
import ma.enova.easystock.dao.criteria.core.AchatItemCriteria;
import ma.enova.easystock.dao.criteria.history.AchatItemHistoryCriteria;
import ma.enova.easystock.zynerator.service.IService;

public interface AchatItemAdminService extends  IService<AchatItem,AchatItemCriteria, AchatItemHistoryCriteria>  {

    List<AchatItem> findByProduitId(Long id);
    int deleteByProduitId(Long id);
    List<AchatItem> findByAchatId(Long id);
    int deleteByAchatId(Long id);



}
