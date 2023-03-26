package ma.enova.easystock.dao.facade.history;

import ma.enova.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.enova.easystock.bean.history.ProduitHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitHistoryDao extends AbstractHistoryRepository<ProduitHistory,Long> {

}
